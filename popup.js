
window.addEventListener("load", generate)

        function generate(){
       
            var tablink;

            var typeNumber = 4;
            var errorCorrectionLevel = 'L';
            var qr = qrcode(typeNumber, errorCorrectionLevel);
            
            chrome.tabs.getSelected(null,function(tab) {
                tablink = tab.url; 
                qr.addData(tablink);
                qr.make();
                document.getElementById('placeHolder').innerHTML = qr.createSvgTag();
                 document.querySelector('#placeHolder').innerHTML += "<div id='you'>You Url QR-code</div>";
            });
           
        }