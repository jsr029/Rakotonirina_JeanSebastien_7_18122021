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
## 9. Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les champs de recherche avancée
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

## Structure
see Structure [here](https://github.com/jsr029/Rakotonirina_JeanSebastien_7_18122021/tree/Algo-2/structure.svg)
<!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=5,IE=9" ><![endif]-->
<!DOCTYPE html>
<html>
<head>
<title>structure.html</title>
<meta charset="utf-8"/>
</head>
<body>
<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2022-02-04T02:31:49.909Z\&quot; agent=\&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36\&quot; etag=\&quot;8-bA2oMu14wDI5Zhs-Gv\&quot; version=\&quot;16.5.3\&quot; type=\&quot;device\&quot;&gt;&lt;diagram name=\&quot;Page-1\&quot; id=\&quot;9f46799a-70d6-7492-0946-bef42562c5a5\&quot;&gt;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&lt;/diagram&gt;&lt;/mxfile&gt;&quot;,&quot;toolbar&quot;:&quot;pages zoom layers lightbox&quot;,&quot;page&quot;:0}"></div>
<script type="text/javascript" src="https://app.diagrams.net/js/viewer-static.min.js"></script>
</body>
</html>

## jsBench
see Test [here](https://github.com/jsr029/Rakotonirina_JeanSebastien_7_18122021/tree/Algo-2/P7jsBecnhEntirePage.JPG)
Code Block1 : boucles for... et conditions if... else if...
Code Block2 : fonctions natives foreach...map...filter...
