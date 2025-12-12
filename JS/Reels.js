const url = 'Library/Libraries.JSON';

fetch(url)
.then((response) => response.json())
.then((data) => 
{   
    let Spoofs = data.Reels.Spoofs;
    let Animation = data.Reels.Animation;
    let FinalReels = data.Reels.FinalReels;

    FinalReels.forEach(element => 
    {
        console.log()
        
        fetch(element.Video)
        .then((txtContent) => txtContent.text())
        .then((iframeData) => 
        {
            const VideoContent = document.createElement('div');

            VideoContent.innerHTML = iframeData;
            VideoContent.className = "Reflect"

            document.getElementById("FINALREELS").append(VideoContent)

            console.log()
        }) 
    });

    Animation.forEach(element =>
    {
        console.log(element.Video)

        const VideoContent = document.createElement('video');
        VideoContent.src = element.Video;
        VideoContent.width = "500"
        VideoContent.controls = "true"
        VideoContent.className = "Reflect"

        document.getElementById("ANIMATION").append(VideoContent)

        console.log()
    })

    Spoofs.forEach(element => 
    {
        console.log()
        
        fetch(element.Video)
        .then((txtContent) => txtContent.text())
        .then((iframeData) => 
        {
            const VideoContent = document.createElement('div');

            VideoContent.innerHTML = iframeData;
            VideoContent.className = "Reflect"

            document.getElementById("SPOOFS").append(VideoContent)

            console.log()
        }) 
    });

})