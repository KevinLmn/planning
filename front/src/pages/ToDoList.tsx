import { Link } from "react-router-dom";

const ToDoList = () => {
  return (
    <div>
      <ul>
        <li>Contact from avec Sendinblue</li>
        <li>Authentification</li>
        <li>Roles</li>
        <li>Store Context</li>
        <li>I18n traduction</li>
        <li>Dockerisation</li>
        <li>VPS et deploiement</li>
        <li>Prettier</li>
        <li>Pipeline</li>
        <li>Achat d'autres design / panier</li>
        <li>Sauvegarde des semaines précédentes sur MySQL</li>
        <li>Possibilité d'accéder a l'historique sans le modifier</li>
        <li>Admin peut supprimer/modifier historique des données</li>
        <li>
          Faire un jeu de drapeau avec un nombre limité, possibilité d'en
          debloquer plus ?
        </li>
      </ul>
      <Link to="/">
        <button> Back to main page </button>
      </Link>
      <Link to="/Contact">
        <button> Contact </button>
      </Link>
    </div>
  );
};

export default ToDoList;
