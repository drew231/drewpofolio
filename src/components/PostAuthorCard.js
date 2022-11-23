import { useEffect, useState } from "react";
import {doc, getDoc} from "firebase/firestore";

export default function PostAuthorard(authorId){
    const [author, setAuthor] = useState()

    useEffect(() => {
        return async () => {
            const ref = doc(firebaseDB, "user", authorId);
            const docSnap = await getDoc (ref);
            if (docSnap.exist()) {
                const author = docSnap.data();

                setAuthor(author)

                console.log({author}) 
            } else {
                console.log("No such document!");
            }
        
        }
    })
    return (

        <>
        
        
        </>
    );
}