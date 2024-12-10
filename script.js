document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (event) => {
        // Remove any currently displayed image
        const existingImage = document.querySelector(".dynamic-image");
        if (existingImage) {
            existingImage.remove();
        }

        // Create a new image element
        const newImage = document.createElement("img");
        newImage.className = "dynamic-image"; // Add a class to identify dynamic images
        newImage.style.maxWidth = "65px";
        newImage.style.margin = "30px 0";

        // Set the image source based on the button's ID
        switch (button.id) {
            case "turn_on":
                newImage.src = "15.jpg";
                newImage.alt = "Turn On Lights";
                break;
            case "play":
                newImage.src = "16.jpg";
                newImage.alt = "Play Music";
                break;
            case "bannar_coming":
                newImage.src = "17.jpg";
                newImage.alt = "Let's Decorate";
                break;
            case "balloons_flying":
                newImage.src = "18.jpg";
                newImage.alt = "Fly With Balloons";
                break;
            case "cake_fadein":
                newImage.src = "19.jpg";
                newImage.alt = "Most Delicious Cake Ever";
                break;
            case "light_candle":
                newImage.src = "20.jpg";
                newImage.alt = "Light Candle";
                break;
            case "wish_message":
                newImage.src = "21.jpg";
                newImage.alt = "Happy Birthday";
                break;
            case "story":
                newImage.src = "22.jpg";
                newImage.alt = "A message for you";
                break;
        }

        // Insert the new image after the clicked button
        button.insertAdjacentElement("afterend", newImage);
    });
});
