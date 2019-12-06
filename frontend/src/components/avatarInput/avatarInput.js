import React, { useState, useRef, useEffect } from "react";
import { useField } from "@rocketseat/unform";
import api from "../../services/api";
import addImage from "../../assets/Add_Image.png";
import { Container } from "./styles";

export default function AvatarInput() {
  const { defaultValue, registerField } = useField("avatar");

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: "avatar_id",
        ref: ref.current,
        path: "dataset.file"
      });
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    api.defaults.headers.Authorization = `Bearer ${localStorage.getItem("cool-jwt")}`;

    const data = new FormData();

    data.append("file", e.target.files[0]);

    const response = await api.post("files", data);

    const { id, url } = response.data.file;

    localStorage.setItem("avatarId", id);

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img src={preview || addImage} alt="Avatar" />
        <input
          type="file"
          id="avatar"
          data-file={file}
          accept="image/*"
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
