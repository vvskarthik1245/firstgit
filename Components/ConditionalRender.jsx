function ConditionalRender(){
    const isLoggedIn=true;
    return(
        <div>
            {isLoggedIn?<h2>Welcome user</h2>:<h2>Pleasee login</h2>}

        </div>
    );
}
export default ConditionalRender;