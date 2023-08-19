import React from "react";
import { Logo } from "../index.js";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="overlap-group">
        <div className="background" />
        <div className="rester-inform">
          <div className="text-wrapper">Rester informé</div>
        </div>
        <div className="prendre-RDV">
          <div className="div">Prendre RDV</div>
        </div>
        <div className="activits-de-groupe">
          <div className="div">Activités de groupe</div>
        </div>
        <div className="mon-parcours">
          <div className="div">Mon parcours</div>
        </div>
        <div className="accompagnements">
          <div className="text-wrapper-2">Accompagnements</div>
        </div>
        <div className="titre">
          <div className="text-wrapper-3">Vers une pleine santé</div>
        </div>
        <Logo className="logo-instance" />
      </div>
    </div>
  );
};

export default Header