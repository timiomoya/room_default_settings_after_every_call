/*
Copyright (c) 2020 Cisco and/or its affiliates.
This software is licensed to you under the terms of the Cisco Sample
Code License, Version 1.1 (the "License"). You may obtain a copy of the
License at
https://developer.cisco.com/docs/licenses
All use of the material herein must be in accordance with the terms of
the License. All rights not expressly granted by the License are
reserved. Unless required by applicable law or agreed to separately in
writing, software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
or implied.
*/



import xapi from 'xapi'
// const xapi = require('xapi');
xapi.Event.CallDisconnect.on(value => {
    console.log(value.CauseType)
    if (value.CauseType == 'LocalDisconnect' || 'RemoteDisconnect'){
        
        xapi.Config.Cameras.SpeakerTrack.Mode.set(Auto);
        xapi.Command.Cameras.SpeakerTrack.Activate({ });
        xapi.Command.Video.Selfview.Set({ FullscreenMode: 'Off', Mode: 'On', PIPPosition: 'LowerRight'});
        xapi.Command.Audio.Volume.Set({Level: '70'});
        xapi.Config.Audio.Microphones.NoiseRemoval.Mode.set('Enabled');
        xapi.Command.Audio.Microphones.NoiseRemoval.Activate({ });


    }
}
    
);
