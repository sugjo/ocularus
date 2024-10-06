use tauri::App;
use tauri::Manager;
use tauri::WebviewWindow;

pub fn create(app: &mut App) {
    #[cfg(desktop)]
    {
        use tauri_plugin_global_shortcut::{
            Code, GlobalShortcutExt, Modifiers, Shortcut, ShortcutState,
        };

        let ctrl_n_shortcut = Shortcut::new(Some(Modifiers::ALT), Code::Space);
        let window = app.get_webview_window("main").unwrap();

        window.show().unwrap();
        window.hide().unwrap();

        app.handle()
            .plugin(
                tauri_plugin_global_shortcut::Builder::new()
                    .with_handler(move |_app, shortcut, event| {
                        if shortcut == &ctrl_n_shortcut && event.state() == ShortcutState::Released
                        {
                            toggle(&window)
                        }
                    })
                    .build(),
            )
            .unwrap();

        app.global_shortcut().register(ctrl_n_shortcut).unwrap();
    }
}

pub fn create_focus_handler(app: &mut App) {
    let window = app.get_webview_window("main").unwrap();
    let window_to_toggle = app.get_webview_window("main").unwrap();

    window.on_window_event(move |event| match event {
        tauri::WindowEvent::Focused(focused) => {
            // hide window whenever it loses focus
            if window_to_toggle.is_devtools_open() {
                return;
            }
            if !focused {
                // set_toggle(&window_to_toggle, false);
            }
        }
        _ => {}
    });
}

fn toggle(window: &WebviewWindow) {
    if window.is_visible().unwrap() {
        window.hide().unwrap();
        window.eval("location.reload()").unwrap();
    } else {
        window.show().unwrap();
        window.set_focus().unwrap();
    }
}

#[tauri::command]
pub fn set_toggle(window: &WebviewWindow, value: bool) {
    if !window.is_visible().unwrap() == value {
        toggle(&window);
    }
}
