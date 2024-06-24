# HRnet

![html][html5-badge]
![css][css3-badge]
![javascript][javascript-badge]
![react][react-badge]
![vscode][vscode-badge]

## Description

Vous travaillez pour le département technologique de Wealth Health, une grande société financière.

![Logo Wealth Health](https://user.oc-static.com/upload/2020/08/14/15974125765772_image2.jpg)

Cette société utilise une application web interne appelée HRnet, qui gère les dossiers des employés. L'application est ancienne et utilise jQuery côté front end, ce qui entraîne des bugs considérables et une augmentation des plaintes en interne.

Voici la liste des plugins jQuery actuellement utilisés qui doivent être convertis / remplacés :

- [Plugin de sélection de date](https://github.com/xdan/datetimepicker)
- [Plugin de fenêtre modale](https://github.com/kylefox/jquery-modal)
- [Menus déroulants](https://github.com/jquery/jquery-ui/blob/master/ui/widgets/selectmenu.js)
- [Plugin pour les tables de données](https://github.com/DataTables/DataTables)

Le dépôt Github de HRnet jQuery est accessible via l'url suivante :

```
https://github.com/OpenClassrooms-Student-Center/P12_Front-end
```

Votre équipe de développement a décidé de lancer une refonte de l'application et on vous a confié les différentes tâches suivantes :

- Convertir l'ensemble du projet HRNet en React
- Convertir l'un des quatre plugins jQuery actuels en un composant React
- Remplacer les 3 plugins jQuery restants par des composants React issus de libraires existantes
- Effectuer des tests de performance Lighthouse en comparant l'ancienne et la nouvelle application

Le package npm [modal-react-validation](https://www.npmjs.com/package/modal-react-validation) a été développé dans le cadre de cette refonte afin de convertir le plugin jQuery de fenêtre modale en un composant React.

## Compétences évaluées

- Analyser la performance d'une application web
- Déployer une application front-end
- Refondre une application pour réduire la dette technique
- Mettre en place son environnement Front-End
- Produire de la documentation technique pour une application

## Notes d'installation

Cloner le repository via :

```
git clone https://github.com/nivoix/WealthHealth.git
```

Lancer HRnet React comme suit :

```
npm install
npm run dev
```

Le site sera alors accessible en local via l'URL :

```
http://localhost:5173
```

<!-- BADGE LINKS -->

[html5-badge]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[css3-badge]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[javascript-badge]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[react-badge]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[vscode-badge]: https://img.shields.io/badge/Made%20with-VSCode-1f425f.svg?style=for-the-badge&
