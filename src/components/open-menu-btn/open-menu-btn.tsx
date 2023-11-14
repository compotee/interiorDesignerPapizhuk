import "./open-menu-btn-style.css";

interface OpenMenuBtnProps {
    onOpenMenuBtnClick: () => void,
    isActive: boolean;
}

function OpenMenuBtn({ onOpenMenuBtnClick, isActive }: OpenMenuBtnProps) {
    function doAnimation() {
        if (!isActive) {
            console.log("close")
        }
        else {
            console.log('open')
        }
    }

    function onClick() {
        onOpenMenuBtnClick();
        doAnimation();
    }

    return (
        <button className="hamburger-lines" onClick={ onClick }>
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
        </button>
    )
}

export default OpenMenuBtn;