# Rakotonirina_JeanSebastien_7_18122021, Dev d'applications REACT/JS
# OpenClassRooms : P7 Développez un algorithme de recherche en javascript
- Analyser un problème informatique
- Développer un algorithme pour résoudre un problème

## Les petits plats
Les Petits Plats est un moteur de recherche qui permet de trouver rapidement des recettes correspondant à l’entrée utilisateur dans : le titre de
la recette, la liste des ingrédients de la recette, la description de la recette.

## 1. Le cas d’utilisation commence lorsque l’utilisateur entre au moins 3 caractères dans la barre de recherche principale.
## 2. Le système recherche des recettes correspondant à l’entrée utilisateur dans : le titre de la recette, la liste des ingrédients de la recette, la description de la recette.
## 3. L’interface est actualisée avec les résultats de recherche
## 4. Les champs de recherche avancée sont actualisés avec les informations ingrédients, ustensiles, appareil des différentes recettes restantes
## 5. L’utilisateur précise sa recherche grâce à l’un des champs : ingrédients, ustensiles, appareil.
## 6. Au fur et à mesure du remplissage les mots clés ne correspondant pas à la frappe dans le champ disparaissent. Par exemple, si l’utilisateur entre “coco” dans la liste d’ingrédients, seuls vont rester “noix de coco” et “lait de coco”.
## 7. L’utilisateur choisit un mot clé dans le champ
## 8. Le mot clé apparaît sous forme de tag sous la recherche principale
## 9. Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les
champs de recherche avancée
## 10. L’utilisateur sélectionne une recette

## Scénario alternatif A1
## A1. Aucune recette correspondante à la recherche. L'enchaînement A1 commence au point 3 du scénario nominal 
## 3. L’interface affiche « Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.

## Scénario alternatif A2
## A2. L’utilisateur commence sa recherche par un tag 
L'enchaînement A2 commence au point 1 du scénario nominal et reprend au point 9 du scénario nominal.
## 1. L’utilisateur commence la recherche par un tag.
## 2. Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les champs de recherche avancée (9 du cas principal)

## Scénario alternatif A3
## A3. L’utilisateur ajoute d’autres tags pour la recherche avancée. L'enchaînement A3 commence au point 9 du scénario nominal. Cet enchaînement peut se répéter autant que nécessaire
## 10. L’utilisateur précise sa recherche grâce à l’un des champs : ingrédients, ustensiles, appareil.
## 11. Au fur et à mesure du remplissage les mots clés ne correspondant pas à la frappe dans le champ disparaissent
## 12. L’utilisateur choisit un mot clé dans le champ
## 13. Le mot clé apparaît sous forme de tag sous la recherche principale
## 14. Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les champs de recherche avancée

L'application consiste en une page simple, réalisée avec Javascript (## sans Framework) utilisant des fonctions natives (foreach, map, filter,...) dans la branch Algo2 et des boucles (for), des conditions (if, else if) dans la branch Master, au niveau de l'input principal, comme demandé et vu avec mon Mentor. 

L'utilisateur pourra donc chercher une recette parmi 50, soit via les mots clés qui mactheront avec le nom, la liste des ingrédients ou la description, soit via un input placé dans 3 dropdowns (ingrédients, appareil, ustensils) ou en cliquant sur un lien correspondat à un tag. La base est dans le fichier ./js/recipes.js, les recettes sont stockées dans un tableau appelé data.  

./js/globalSeatch.js renferme l'algorithme dans chacune des branch sous la class du même nom. L'utilisation des fonctions natives améliorent considérablement les performances, logique, sinon leurs existences seraient remises en question. Mais le moyen le plus efficace pour appuyer cette thèse est le test des 2 algos dans jsBench et le résultat est sans appel. 

Pour illustrer les deux algorithmes, j'ai utilisé Draw.io, comme conseillé dans la feuille de route.

for(let a=0; a < améliorations.length; a++){if(certaines améliorations étaient réalisées){j'aurais peut-être gagné du temps}else{Ou alors c'est un test de débrouillardise};}
- Plus de cours sur le développement d'un moteur de recherche en js ou autre.
- Meilleure base de données, celle-ci est corrompue par des doublons, des erreurs...
- Gestion des accents absente, si je saisis creme sans accent, cela ne foncttione pas.
- J'ai évité au maximum les répétitions dans le code, mais elles sont là.

Conclusion, j'ai toujours ce plaisir particulier, à découvrir chaque nouveau projet, fasciné par les différents fabuleux design, simples toujours dans le thème, motivant et repoussant ainsi mes limites pour aller vers le meilleur de moi-même. P7 montre l'importance des fonctions natives javascrit ou autre, pourtant mea culpa, j'ai tendance à faire l'inverse. La preuve étant, j'ai développé l'algo sans fonctions natives en premier d'où le nom de la branch, resté inchangé, Master.

## Algorigram
see documentation [here](https://github.com/jsr029/Rakotonirina_JeanSebastien_7_18122021/tree/Algo-2/P7algorigram.svg)

## Site
see Demo [here](https://jsr029.github.io/Rakotonirina_JeanSebastien_7_18122021)


