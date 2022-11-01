const images = document.querySelector(".images");

e function imageUploader(files) {
  const imageList = [];
  for (let file of files) {
    const fileReader = new FileReader();

    fileReader.onloadend = (e) => {
      const { result } = e.target;
      const h2 = document.createElement("h2");
      h2.innerText = file.name?.split(".")[0];
      const img = document.createElement("img");
      img.setAttribute("src", result);

      imageList.push({ fileName: file.name, result });

      localStorage.setItem("imageSlides", JSON.stringify(imageList));
      images.append(h2, img);
    };

    fileReader.readAsDataURL(file);
  }
}

