import { useRef, useState, useEffect } from "react";
import style from "./CreatePost.module.scss";
import { LeftArrowIcon } from "../../../assets/svg";
import CloseIcon from "../../../assets/svg/CloseIcon";
import ChoseMedia from "./ChoseMedia";
import CropMedia from "./CropMedia";

import ballon from "../../../assets/images/hotairballoon.jpg";
import EditMedia from "./EditMedia";
import CreateNewPost from "./CreateNewPost";
//-----------------------------------------------

type state = {
  more: boolean;
  create: boolean;
};
type Props = {
  setOpenModal: React.Dispatch<React.SetStateAction<state>>;
};
type EditPictureProps = {
  leftArrowBtnAction: () => void;
  headerTitle: string;
  component: React.ReactNode;
  setModalToDisplay: React.Dispatch<React.SetStateAction<number>>;
};

//-----------------------------------------------

const CreatePost = ({ setOpenModal }: Props) => {
  const containerRef = useRef(null);
  const [media, setMedia] = useState<string>();
  const [openModalDiscard, setOpenModalDiscard] = useState(false);
  const [modalToDisplay, setModalToDisplay] = useState(0);

  function handleCloseModalByOut(
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
  ) {
    if (e.target === containerRef.current) {
      return setOpenModal((prev) => ({ ...prev, create: false }));
    } else if ((e.target as HTMLElement).id === "close_btn_modal_create") {
      return setOpenModal((prev) => ({ ...prev, create: false }));
    }
  }

  const options = [
    {
      id: 0,
      headerTitle: "Crop",
      leftArrowBtnAction: () => setOpenModalDiscard(true),
      component: <CropMedia media={media} />,
    },
    {
      id: 1,
      headerTitle: "Edit",
      leftArrowBtnAction: () => setModalToDisplay((prev) => prev - 1),
      component: <EditMedia media={media} />,
    },
    {
      id: 2,
      headerTitle: "Create new post",
      leftArrowBtnAction: () => setModalToDisplay((prev) => prev - 1),
      component: <CreateNewPost media={media} />,
    },
  ];

  return (
    <div
      className={style.container}
      ref={containerRef}
      onClick={handleCloseModalByOut}
    >
      <button
        className={`${style.btn} ${style.btn_close}`}
        onClick={handleCloseModalByOut}
        id="close_btn_modal_create"
      >
        <CloseIcon />
      </button>

      {!media ? (
        <ChoseMedia setMedia={setMedia} />
      ) : (
        options.map(
          (e) =>
            e.id === modalToDisplay && (
              <MainModal
                key={e.id}
                setModalToDisplay={setModalToDisplay}
                leftArrowBtnAction={e.leftArrowBtnAction}
                headerTitle={e.headerTitle}
                component={e.component}
              />
            )
        )
      )}

      {openModalDiscard && (
        <DiscardModal
          setOpenModalDiscard={setOpenModalDiscard}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
};

const MainModal = ({
  leftArrowBtnAction,
  headerTitle,
  component,
  setModalToDisplay,
}: EditPictureProps) => {
  return (
    <div className={style.modalWrapper}>
      <header className={style.headerFlex}>
        <button className={style.btn} onClick={leftArrowBtnAction}>
          <LeftArrowIcon />
        </button>

        <p>{headerTitle}</p>

        <button
          className={`${style.btn} ${style.nextBtn}`}
          onClick={() => setModalToDisplay((prev) => prev + 1)}
        >
          Next
        </button>
      </header>
      {component}
    </div>
  );
};

const DiscardModal = ({
  setOpenModalDiscard,
  setOpenModal,
}: {
  setOpenModalDiscard: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModal: React.Dispatch<React.SetStateAction<state>>;
}) => {
  const containerRef = useRef(null);

  function handleCloseModalByOut(
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
  ) {
    if (e.target === containerRef.current) {
      return setOpenModalDiscard(false);
    }
  }

  return (
    <div
      className={style.discardContainer}
      onClick={handleCloseModalByOut}
      ref={containerRef}
    >
      <div className={style.discardWrapper}>
        <header>
          <h4>Discard post?</h4>
          <p>If you leave, your edits won't be saved.</p>
        </header>
        <div className={style.discardBtnsWrapper}>
          <button
            className={`${style.btn} ${style.btnDiscard}`}
            onClick={() => setOpenModal((prev) => ({ ...prev, create: false }))}
          >
            Discard
          </button>
          <button
            className={style.btn}
            onClick={() => setOpenModalDiscard(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
