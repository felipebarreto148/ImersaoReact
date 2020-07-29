import React from "react";

function Button(props) {
    //props ==> { className: "O que alguém passar",  href: "/"}
    console.log(props);
    return (
        <a href={props.to} className={props.className}>
            Novo Vídeo
        </a >
    );
}

export default Button;