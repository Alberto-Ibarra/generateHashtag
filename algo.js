// function generateHashtag (str) {
//     let newStr = "#"

//     if(str === ""){
//         console.log(false);
//         return false
//     }

//     for(let i = 0; i < str.length; i++){
//         if(str.length > 140){
//             console.log(false);
//             return false
//         }

//         if(str[i - 1] === " "){
//             continue
//         }else{
//             newStr += str[i]
//         }
//         if(str[i] === " "){
//             newStr += str[i + 1].toUpperCase();
//         }
//     }

//     let hashtag = newStr.replace(/\s/g, '')
//     console.log(hashtag);
// }

function generateHashtag(str) {
    if (!str.trim()) {
        console.log(false);
        return false;
    }

    const words = str.trim().split(/\s+/);

    let hashtag = "#";
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        hashtag += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    if (hashtag.length > 140) {
        console.log(false);
        return false;
    }

    console.log(hashtag);
}



generateHashtag('Hello there thanks for trying my Kata')
generateHashtag("    Hello     World   "  )
generateHashtag("")
generateHashtag("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
