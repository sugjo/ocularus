use fuzzy_matcher::{skim::SkimMatcherV2, FuzzyMatcher};
use serde::{Deserialize, Serialize};
use serde_json::json;
use std::{collections::HashMap, io};
use tauri::WebviewWindow;
use walkdir::WalkDir;

#[derive(Deserialize, Serialize, Debug)]
#[serde(rename_all = "camelCase")]
struct Path {
    path: String,
    is_active: bool,
}

#[derive(Serialize, Debug)]
struct Result {
    path: String,
    name: String,
    score: i64,
}

pub fn search(_: &WebviewWindow, value: &str, paths: &str) -> io::Result<String> {
    let mut result: Vec<Result> = vec![];
    let matcher = SkimMatcherV2::default();
    let paths = serde_json::from_str::<HashMap<String, Path>>(&paths).unwrap();
    let filtered_paths = paths
        .iter()
        .filter(|paths| paths.1.is_active == true)
        .map(|paths| &paths.1.path);

    for path in filtered_paths {
        for entry in WalkDir::new(path).follow_links(true) {
            let entry = entry.unwrap();
            let path = entry.path().to_str().unwrap().to_owned();
            let name = entry
                .path()
                .file_stem()
                .unwrap()
                .to_str()
                .unwrap()
                .to_owned();

            if let Some(prompt_match) = matcher.fuzzy_match(&name, value) {
                let score = prompt_match;

                result.push(Result { path, name, score });
            }
        }
    }

    result.sort_by(|a,b| b.score.cmp(&a.score));

    Ok(json!(&result).to_string())
}
