<div></div>

<style>
    div {
        width: 100px;
        height: 100px;
        border-left: 4px solid red;
        border-right: 4px solid red;
        border-top: 4px solid #e6d00b;
        border-bottom: 4px solid #e6d00b;
        border-radius: 50%;
        position: absolute;
        top: calc(50vh - 50px);
        left: calc(50vw - 50px);
        animation: 2.5s linear spin infinite;
    }

    @keyframes spin {
        from {
            rotate: 0;
        }

        to {
            rotate: 360deg;
        }
    }
</style>
