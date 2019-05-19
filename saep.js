        function Shuffle(o) {
            for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        }
        var packages = [
            'haibison.android.admob_test_ids',
        ];
        var admob = [
[
'4852356386554342',
'9402207265',
],
];
        Shuffle(packages);
        var loop = packages.length - admob.length;
        var x = 0;
        while(x < 1 * admob.length){
            for (var i = 0; i < packages.length - loop; i++) {
                var source_banner = 'https://googleads.g.doubleclick.net/mads/gma?preqs=0&u_sd=1.5&u_w=300&msid='+ packages[i] +'&cap=a&js=afma-sdk-a-v3.3.0&toar=0&isu=W%27+Math.floor%28Math.random%28%29*9%29+%27EEABB8EE%27+Math.floor%28Math.random%28%29*99%29+%27C2BE770B684D%27+Math.floor%28Math.random%28%29*99999%29+%27ECB&cipa=0&format=300x250_mb&net=wi&app_name=1.android.'+ packages[i] +'&hl=en&u_h=%27+Math.floor%28Math.random%28%29*999%29+%27&carrier=%27+Math.floor%28Math.random%28%29*999999%29+%27&ptime=0&u_audio=4&u_so=p&output=html&region=mobile_app&u_tz=480&client_sdk=1&ex=1&client=ca-app-pub-'+ admob[i][0] +'&slotname='+ admob[i][1] +'&caps=inlineVideo_interactiveVideo_mraid1_clickTracking_sdkAdmobApiForAds&jsv=18" target="_blank" height="251" width="301" frameborder="0" scrolling="no" width="0" height="0" marginwidth="0" marginheight="0"';
            }
            document.write('<iframe target="_blank" src="'+ source_banner +'"/></iframe>');
            x++;
        }
