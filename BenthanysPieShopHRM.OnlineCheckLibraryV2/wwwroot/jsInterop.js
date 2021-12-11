window.bethanyOnlineCheckLib = {

    registerOnlineHandler: function (dotNetObjectRef) {

        function onlineHandler() {
            dotNetObjectRef.invokeMethodAsync("SetOnlineStatus",
                navigator.onLine);
        }

        //setup initial values 
        onlineHandler();

        //register event handler 
        window.addEventListener("online", onlineHandler);
        window.addEventListener("offline", onlineHandler);

    }

};
