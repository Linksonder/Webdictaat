
Hoi Stijn

Even herinneren waar je was:

* Los alle bower en npm en gulp dingen verwijders
* een voor een weer toegevoegd
* Nu alleen een SASS task in gulp en jquery en bootstrap via bower
* je kan geen angular2 installeren via bower, is kapot
* Angular geinstalleerd via node_modules
* probleem dat node_modules map niet in wwwroot staat
* gulp task die de benodigdge files naar de wwwrooot copieert
* nu werkt angular 2 maar typescript compiler werkt niet
* plugin voor visual studio task runner voor npm scripts
	o  Eerst gekeken of ik tsc via gulp kon doen maar werkte niet naar behoren
* Nu runt tsc -w (watch) meteen als het project geopend word 
* Let op! Nu moeten niet alleen de node_modules maar ook de wwwroot/node_modules ge-exclude worden in de tsconfig.json

	Ik ben nu bezig met het afmaken van de tutorial