const uploadIcon = document.querySelector(".icon i");
const inputFile = document.querySelector("input");

uploadIcon.addEventListener("click", function () {
  //   console.log(this.nextElementSibling);
  this.nextElementSibling.click();
});


inputFile.addEventListener("change", function (e) {
  const { files } = e.target;
  const aList = document.querySelector(".row");
  const images = document.querySelector(".row a ");
      const photos = [];
 function imageUploader(files) {
  const imageList = [];
  for (let file of files) {
    const fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      const { result } = e.target;
      const h2 = document.createElement("h2");
      h2.innerText = file.name?.split(".")[0];
      const img = document.createElement("img"); 
      img.setAttribute("src", result);
      const a = document.createElement("a");
      a.setAttribute("href", result)
      aList.append(a);
      images.append(img);
      
      //   imageOnGallery.forEach((a) => {
      //   a.setAttribute("href",result)
      // })

        
     
      imageList.push({ fileName: file.name, result });

      localStorage.setItem("imageSlides", JSON.stringify(imageList));
     
    };
 
    fileReader.readAsDataURL(file);
  }
}


  imageUploader(files);
});

const imageOnGallery = document.querySelectorAll(".gallery a");
const popup = document.querySelector(".popup");
const sliderImg = document.querySelector(".slider img");
const closeIcon = document.querySelector(".close-icon");
const nextBtn = document.querySelector(".right");
const prevBtn = document.querySelector(".left");

imageOnGallery.forEach((img) => {
  img.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.add("showSlider");
    let imgSrc = this.getAttribute("href");
    sliderImg.setAttribute("src", imgSrc);
    popup.style.display = "block";

  });
});

nextBtn.addEventListener("click", function (e) {
  let sliderShow = document.querySelector(".showSlider");

  let changaleAttr;

  console.log(sliderShow);

  if (sliderShow.nextElementSibling) {
    sliderShow.nextElementSibling.classList.add("showSlider");
    changaleAttr = sliderShow.nextElementSibling.getAttribute("href");
  } else {
    sliderShow.parentElement.children[0].classList.add("showSlider");
    changaleAttr = sliderShow.parentElement.children[0].getAttribute("href");
  }
  sliderShow.classList.remove("showSlider");
  sliderImg.setAttribute("src", changaleAttr);
});
prevBtn.addEventListener("click", function (e) {
  let sliderShow = document.querySelector(".showSlider");

  let changaleAttr;

  console.log(sliderShow);

  if (sliderShow.previousElementSibling) {
    sliderShow.previousElementSibling.classList.add("showSlider");
    changaleAttr = sliderShow.previousElementSibling.getAttribute("href");
  } else {
    sliderShow.parentElement.children[2].classList.add("showSlider");
    changaleAttr = sliderShow.parentElement.children[2].getAttribute("href");
  }
  sliderShow.classList.remove("showSlider");
  sliderImg.setAttribute("src", changaleAttr);
});

function closeSlider() {
  popup.style.display = "none";
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    closeSlider();
  }
});

closeIcon.addEventListener("click", function () {
  closeSlider();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeIcon();
  }else if(e.key==="ArrowRight"){
    nextBtnFucntion();

  }
  else if(e.key==="ArrowLeft"){
    // prevBtnFucntion();

  }
});


function nextBtnFucntion() {
    let sliderShow = document.querySelector(".showSlider");

  let changaleAttr;

  console.log(sliderShow);

  if (sliderShow.nextElementSibling) {
    sliderShow.nextElementSibling.classList.add("showSlider");
    changaleAttr = sliderShow.nextElementSibling.getAttribute("href");
  } else {
    sliderShow.parentElement.children[0].classList.add("showSlider");
    changaleAttr = sliderShow.parentElement.children[1].getAttribute("href");
  }
  sliderShow.classList.remove("showSlider");
  sliderImg.setAttribute("src", changaleAttr);
}

function prevBtnFucntion() {
    let sliderShow = document.querySelector(".showSlider");

    let changaleAttr;
  
    console.log(sliderShow);
  
    if (sliderShow.previousElementSibling) {
      sliderShow.previousElementSibling.classList.add("showSlider");
      changaleAttr = sliderShow.previousElementSibling.getAttribute("href");
        
    } else {
      sliderShow.parentElement.children[2].classList.add("showSlider");
      changaleAttr = sliderShow.parentElement.children[2].getAttribute("href");
    }
    sliderShow.classList.remove("showSlider");
    sliderImg.setAttribute("src", changaleAttr);
}

const interval=() =>{
    let sliderShow = document.querySelector(".showSlider");

  let changaleAttr;

  console.log(sliderShow);

  if (sliderShow.nextElementSibling) {
    sliderShow.nextElementSibling.classList.add("showSlider");
    changaleAttr = sliderShow.nextElementSibling.getAttribute("href");
  } else {
    sliderShow.parentElement.children[0].classList.add("showSlider");
    changaleAttr = sliderShow.parentElement.children[1].getAttribute("href");
  }
  sliderShow.classList.remove("showSlider");
  sliderImg.setAttribute("src", changaleAttr);
}
interval();