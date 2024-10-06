use super::{search::search, search_window_switch::set_toggle};
use tauri::WebviewWindow;

#[tauri::command]
pub fn set_search_toggle(window: WebviewWindow, value: bool) {
    set_toggle(&window, value);
}

#[tauri::command]
pub fn prompt_search(window: WebviewWindow, value: &str, paths: &str) -> String {
    let result = search(&window, value, paths);

    match result {
        Ok(r) => r,
        Err(_) => String::from(""),
    }
}

#[tauri::command]
pub fn open(path: &str) -> String {
    match opener::open(path) {
        Ok(_) => String::from("success"),
        Err(e) => e.to_string(),
    }
}
