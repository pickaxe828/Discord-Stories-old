/**
 * @name DiscordStories
 * @author Pickaxe828#4395
 * @description Let you be able to post and see stories like how Instagram stories works
 * @version _Development
 * @invite nKbSGzW6
 * @updateUrl https://raw.githubusercontent.com/pickaxe828/Discord-Stories/main/discord_stories.plugin.js
 **/

let debug = false;
let crypto = require('crypto');


module.exports = class DiscordStories {
    

    load() {}

    unload() { }

    start() {
        this.init()
        this.frdListUpload()

    }

    stop() { } // Required function. Called when the plugin is deactivated

    observer(changes) {
        this.uiRefresh()

    }

    updater() {
        const fs = require("fs");
        //%appdata%\betterdiscord\plugins
        function readTextFile(filePath) {
            const xhrFile = new XMLHttpRequest();
            let text = ""
            xhrFile.open("GET", filePath, true);
            xhrFile.onload = function() {
                text = xhrFile.response;
            }

            xhrFile.send();
            return text
        }
        
        let github_hash = crypto.createHash('md5').update(
            readTextFile("https://raw.githubusercontent.com/pickaxe828/Discord-Stories/main/plugins/DiscordStories.plugin.js")
        ).digest('hex');

        let local_hash = crypto.createHash('md5').update().digest('hex');

        console.log(hash)

        

    }

    init() {
        if (debug === false) {
            this.updater();
        }

    }
    frdListUpload() {}
    uiRefresh() {}
}