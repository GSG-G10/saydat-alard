const previewFile = (file, cb) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onloadend = () => {
    cb(reader.result);
  };
};

export default previewFile;
