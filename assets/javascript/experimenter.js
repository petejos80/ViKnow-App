var ChatList = new Array();
var p;
var DirectoryList = new Array();
var ChatString = '';

function loadChat(variable) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            DirectoryList = JSON.parse(req.responseText);
            var p = variable;
            var defArr = []; // store references to deferred objects
            while (p < DirectoryList.length) {
                defArr.push(loadLog(p));
                p++;
            }
            $.when.apply($,defArr).done(function(){ // apply handler when all are done
                // handle case where only one ajax request was sent
                var args = arguments;
                if ($.type(args[0]) != "array") {
                    args = [];
                    args[0] = arguments;
                }
                // loop over and ouput results.
                var outHTML = "";
                $.each(args,function(i){
                    outHTML += args[i][0];
                    ChatList.push(args[i][0]);
                });
                $("#ChatContainer").append(outHTML);
            });
        }
    }

    //END REQ1

    //Post Chat to DIV

    function loadLog(p) {
        return $.get('chat/log/' + DirectoryList[p]);
    }

    //End
    req.open('GET', 'process/ReadChatLogs.php', true)
    req.send(null);
}