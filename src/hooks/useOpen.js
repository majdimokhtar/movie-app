import { useState } from "react";

const useOpen = (initial) => {
  const [open, setOpen] = useState(initial);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return { open, handleOpen, handleClose, handleToggle };
};

export default useOpen;
