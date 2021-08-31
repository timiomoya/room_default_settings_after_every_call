import xapi from 'xapi'
// const xapi = require('xapi');
xapi.Event.CallDisconnect.on(value => {
    console.log(value.CauseType)
    if (value.CauseType == 'LocalDisconnect' || 'RemoteDisconnect'){
        
        xapi.Config.Cameras.SpeakerTrack.Mode.set(Auto);
        xapi.Command.Cameras.SpeakerTrack.Activate({ });
        xapi.Command.Video.Selfview.Set({ FullscreenMode: 'Off', Mode: 'On', PIPPosition: 'LowerRight'});

    }
}
    
);
