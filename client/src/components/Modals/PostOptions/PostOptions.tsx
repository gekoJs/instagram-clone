import { CurrentWarningContext } from "../../../App";
import { modalOpenProps } from "../../AllCards/AllCards";
import style from "./PostOptions.module.scss";
import { useRef, useContext } from "react";
//-----------------------------------------------

type props = {
  modalOpenProps: modalOpenProps;
  own: boolean;
  following: boolean;
};

//-----------------------------------------------

const PostOptions = ({ modalOpenProps, own, following }: props) => {
  const warningContext = useContext(CurrentWarningContext);
  const containerRef = useRef(null);

  const options = [
    {
      name: "Delete",
      action: warningContext?.handleShowWarning,
      danger: true,
      show: own,
    },
    {
      name: "Report",
      action: warningContext?.handleShowWarning,
      danger: true,
      show: !own && (following || !following),
    },
    {
      name: "Unfollowing",
      action: warningContext?.handleShowWarning,
      danger: true,
      show: following,
    },
    {
      name: "Not interested",
      action: warningContext?.handleShowWarning,
      danger: false,
      show: !own && !following,
    },
    {
      name: "Edit",
      action: warningContext?.handleShowWarning,
      danger: false,
      show: own,
    },
    {
      name: "Hide like count",
      action: warningContext?.handleShowWarning,
      danger: false,
      show: own,
    },
    {
      name: "Turn off commenting",
      action: warningContext?.handleShowWarning,
      danger: false,
      show: own,
    },

    {
      name: "Add to favorites",
      action: warningContext?.handleShowWarning,
      danger: false,
      show: !own && following,
    },

    {
      name: "Go to post",
      action: warningContext?.handleShowWarning,
      danger: false,
      show: true,
    },
    {
      name: "Share to...",
      action: warningContext?.handleShowWarning,
      danger: false,
      show: true,
    },
    {
      name: "Copy link",
      action: warningContext?.handleShowWarning,
      danger: false,
      show: true,
    },
    {
      name: "Embed",
      action: warningContext?.handleShowWarning,
      danger: false,
      show: true,
    },
    {
      name: "About this account",
      action: warningContext?.handleShowWarning,
      danger: false,
      show: true,
    },
    {
      name: "Cancel",
      action: handleCloseModal,
      danger: false,
      show: true,
    },
  ];

  function handleCloseModal(
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) {
    if (e.target === containerRef.current) {
      modalOpenProps.setOpenModal(false);
    }
    if ((e.target as HTMLElement).id === "close_btn_modal_options") {
      return modalOpenProps.setOpenModal(false);
    }
  }

  return (
    <div
      className={style.container}
      ref={containerRef}
      onClick={handleCloseModal}
    >
      <div className={style.contentWrapper}>
        {options.map(
          (e) =>
            e.show && (
              <button
                onClick={e.action}
                className={`${style.btn} ${e.danger && style.danger}`}
                id={e.name === "Cancel" ? "close_btn_modal_options" : ""}
              >
                {e.name}
              </button>
            )
        )}
      </div>
    </div>
  );
};

export default PostOptions;
