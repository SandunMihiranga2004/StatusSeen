const fs = require("fs");
const chalk = require("chalk");


//
global.autoread = false;
global.available = false;
global.autoTyping = true;                //auto tying by default off.
global.autoRecord = false;                //auto recording by default off.
global.autoBio = false;
global.antiCall= false;

global.OwnerNumber = ["94742943716"];   //If you want singal number so global.Owner = ['8801928502256'] Change into your number.
global.ownertag = ["94742943716"];
global.OwnerName = "Sandun Mihiranga";
global.BotName = "Status Seen";
global.author = "Sandun Mihiranga";                               //Do not change.
global.BotSourceCode = "https://wa.me/+94742943716?text=Hi"; //Do not change.


//
global.sessionName = "session";                          //Do not change.


//                              //Default prefix here.
global.OpenAiAPI = "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";
global.PaLmKEY = "AIzaSyCdf0QI11bfqok5uX1UXuTvonUkeOF8ooM"
global.ReplicateApi = "Put here"

//
global.reactmoji = "✅";
global.vidmenu = { url: 'https://tenor.com/view/jujutsu-kaisen0-yuta-okkotsu-gif-26767662' };

//

global.Thumb = fs.readFileSync("./media/pic10.jpg");


//

global.ntnsfw = []

//
global.replai = {
    le: 'Here you go...',
    useradmin: 'Sorry, only *Group Admins* can use this command.',
    botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group.',
    botowner: 'Only my *Owner* can use this command.',
    grouponly: 'This command is only made for *Groups*.',
    privateonly: 'This command is only made for *Private Chat*.',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Please Wait...',
    nolink: 'Please provide me *link*.',
    error: 'An error occurd!',
    banned: 'You are *Banned*.'

};
