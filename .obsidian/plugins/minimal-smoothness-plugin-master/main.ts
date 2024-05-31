import { Notice, Plugin } from 'obsidian';

export default class MinimalSmoothnessPlugin extends Plugin {
	async onload() {
		new Notice('Minimal Smoothness Enabled');
		
		// This creates an icon in the left ribbon.
		const ribbonIconEl = this.addRibbonIcon('pencil-line', 'Minimal Smoothness Plugin', (evt: MouseEvent) => {
			// Called when the user clicks the icon.
			new Notice('lets get writing!');
		});
		// Perform additional things with the ribbon
		ribbonIconEl.addClass('ms-plugin-ribbon-class');

		// This adds a status bar item to the bottom of the app. Does not work on mobile apps.
		const statusBarItemEl = this.addStatusBarItem();
		statusBarItemEl.setText('Status Bar Text');

		
				}
	// This adds a settings tab so the user can configure various aspects of the plugin
	// this.addSettingTab(new SampleSettingTab(this.app, this));

	onunload() {
		new Notice('Minimal Smoothness Disabled')

	}
}