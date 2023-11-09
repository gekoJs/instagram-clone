import { useRef, useState } from "react";
import style from "./CreatePost.module.scss";
import { LeftArrowIcon } from "../../../assets/svg";
import CloseIcon from "../../../assets/svg/CloseIcon";
import ChoseMedia from "./ChoseMedia";
import CropMedia from "./CropMedia";

import EditMedia from "./EditMedia";
import CreateNewPost from "./CreateNewPost";
import { stateOpenModals } from "../../../layouts/MainLayout/MainLayout";
//-----------------------------------------------

type Props = {
  setOpenModal: React.Dispatch<React.SetStateAction<stateOpenModals>>;
};
type EditPictureProps = {
  leftArrowBtnAction: () => void;
  headerTitle: string;
  component: React.ReactNode;
  nextAction: {
    name: string;
    action: () => void;
  };
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
      nextAction: {
        name: "Next",
        action: () => setModalToDisplay((prev) => prev + 1),
      },
      component: <CropMedia media={media} />,
    },
    {
      id: 1,
      headerTitle: "Edit",
      leftArrowBtnAction: () => setModalToDisplay((prev) => prev - 1),
      nextAction: {
        name: "Next",
        action: () => setModalToDisplay((prev) => prev + 1),
      },
      component: <EditMedia media={media} />,
    },
    {
      id: 2,
      headerTitle: "Create new post",
      leftArrowBtnAction: () => setModalToDisplay((prev) => prev - 1),
      nextAction: {
        name: "Share",
        action: () => {},
      },
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
                leftArrowBtnAction={e.leftArrowBtnAction}
                headerTitle={e.headerTitle}
                component={e.component}
                nextAction={e.nextAction}
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
  nextAction,
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
          onClick={nextAction.action}
        >
          {nextAction.name}
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
  setOpenModal: React.Dispatch<React.SetStateAction<stateOpenModals>>;
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
