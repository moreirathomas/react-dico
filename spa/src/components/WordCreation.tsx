import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "./Button";
import { Header } from "./Header";
import type { Word } from "../models/word";

interface Props {
    action: (fr: string, en: string) => void
}

export const WordCreation: React.FunctionComponent<Props> = ({ action }) => {
    const history = useHistory();
    const [fr, setFr] = useState("");
    const [en, setEn] = useState("");

    const handleAdd = () => {
        if (en === "" && fr === "") {
            return
        }
        action(fr, en)
        history.push("/");
    }

    return (
        <div>
            <Header>Ajout</Header>
            <label htmlFor="en">🇺🇸</label>
            <input name="en" onChange={(event) => setEn(event.target.value)} type="text" />
            <label htmlFor="fr">🇫🇷</label>
            <input name="fr" onChange={(event) => setFr(event.target.value)} type="text" />
            <Button action={handleAdd}>Add word</Button>
        </div>
    );
};

