const url = 'Library/Libraries.JSON';



//_____________________________________________________________(Modem Elements)

const OpenModal = document.getElementById("OPEN");
const CloseModal = document.getElementById("CLOSE");
const Modal = document.getElementById("MODAL");

const Name = document.getElementById("NAME");
const Image_ = document.getElementById("IMAGE");



//_____________________________________________________________(Code)

if(OpenModal)OpenModal.addEventListener("click", () => {Modal.showModal()});

if(CloseModal)CloseModal.addEventListener("click", () => {Modal.close(); Modal.className = "HIDEMODAL"});

fetch(url)
.then((response) => response.json())
.then((data) => 
{
    let Personal_Art = data.Gallery.Personal_Art;
    let Project_Math = data.Gallery.Project_Math;
    let Class_Projects = data.Gallery.Class_Projects;

    Class_Projects.forEach(Element =>
    {
        //_____________________________________________________________(Content Elements)

        const Content_Block = document.createElement("button");
        Content_Block.className = "Content_Block Gallery_Thumbnail";
        Content_Block.addEventListener('click' , () => 
            {
                Modal.showModal()
                Modal.className = "";
                Name.textContent = Element.Name;
                Image_.src = Element.Image;
                Image_.width = "400"
            })
        

        const Thumbnail = document.createElement("img");
        Thumbnail.className = "Thumbnail";
        Thumbnail.width = "100";

        const Title = document.createElement("h3");
        Title.className = "Title";

        //_____________________________________________________________(Final Render)

        Content_Block.append(Thumbnail, Title);

        Content_Block.style.webkitBoxReflect = "below 5px linear-gradient(transparent, transparent, rgba(255, 255, 255, 0.3))"

        Thumbnail.src = Element.Image;

        Title.textContent = Element.Name;
        
        document.getElementById("CLASS_PROJECT").append(Content_Block);
        
    }) 

    Project_Math.forEach(Element =>
    {
        //_____________________________________________________________(Content Elements)

        const Content_Block = document.createElement("button");
        Content_Block.className = "Content_Block Gallery_Thumbnail";
        Content_Block.addEventListener('click' , () => 
            {
                Modal.showModal()
                Modal.className = "";
                Name.textContent = Element.Name;
                Image_.src = Element.Image;
                Image_.width = "400"
            })
        

        const Thumbnail = document.createElement("img");
        Thumbnail.className = "Thumbnail";
        Thumbnail.width = "100";

        const Title = document.createElement("h3");
        Title.className = "Title";

        //_____________________________________________________________(Final Render)

        Content_Block.append(Thumbnail, Title);

        Content_Block.style.webkitBoxReflect = "below 5px linear-gradient(transparent, transparent, rgba(255, 255, 255, 0.3))"

        Thumbnail.src = Element.Image;

        Title.textContent = Element.Name;
        
        document.getElementById("PROJECT_MATH()").append(Content_Block);
        
    }) 

    Personal_Art.forEach(Element =>
    {
        //_____________________________________________________________(Content Elements)

        const Content_Block = document.createElement("button");
        Content_Block.className = "Content_Block Gallery_Thumbnail";
        Content_Block.addEventListener('click' , () => 
            {
                Modal.showModal()
                Modal.className = "";
                Name.textContent = Element.Name;
                Image_.src = Element.Image;
                Image_.width = "400"
            })


        const Thumbnail = document.createElement("img");
        Thumbnail.className = "Thumbnail";
        Thumbnail.width = "100";

        const Title = document.createElement("h3");
        Title.className = "Title";

        //_____________________________________________________________(Final Render)

        Content_Block.append(Thumbnail, Title);

        Content_Block.style.webkitBoxReflect = "below 5px linear-gradient(transparent, transparent, rgba(255, 255, 255, 0.3))"

        Thumbnail.src = Element.Image;

        Title.textContent = Element.Name;
        
        document.getElementById("PERSONAL_ART").append(Content_Block);
        
    })  
});


