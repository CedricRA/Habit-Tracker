Lets create a new project together, using HTML, CSS and JS. Our project is a gamified Habit tracker. Its aim is to track habits of users, encouraging and rewarding them for keeping good habits (such as reading, gym, meditating ..). Rewards may be levels (as gaming), gaining experience stats (HP, INT, DEX, ...) badges, or any other ways to celebrate success. We may brainstorm about it before coding.

Good questions. 
1. first target is desktop but should be mobile-responsive ideally. 
2. localStorage is fine for now - we may use a light DB later. 
3. Yes for habit creation, editing, deletion, and daily check‑off. And yes for categories and levels (for example can be a plan to start with 5 squats/push ups and when leveling after a few days suggest to increate to 10, and so on. Same for reaing ot other activities).
4. What do you suggest? To me seems good to be fixed, but keeping streak is important too.
Stats should be as in RPG games and fit activities (Intelligence for reading, HP for Gym) and you may suggest categories. Later users may choose/edit what they want to work on in each categories.
We want something smooth, fun, simple for the user. But very addictive.
5. Yes, Badges: visual icons shown on a profile page.
Levels/XP: progress bar, if possible with animated “level‑up” effect.
6. Dark theme. We may add light theme later.
As main colors i'd like lightgreen, and white as accent.
We may create another MD file with wireframe in ASCII art to validate screens.
But lets begin simple and efficient and we may iterate.
7. For now we can keep it single‑user, for faster and easier developpement. But there will be authentification later and most probably a payment system with monthly fees (or may be in-app transactions) in future.

C'est un bon début mais en fait j'aimerais que l'on crée un historique des jours pour nos habitudes.
Sur chaque jour il faut qu'on puisse cocher ou décocher les habitudes réalisées. Si on décoche une habitude, ça doit enlever l'expérience. Et quand on la recoche, ça rajoute l'expérience à nouveau.

La navigation entre les dates doit pouvoir s'effectuer avec les flèches droite et gauche. Et quand on clique sur le libellé d'une habitude, ça doit cocher la case associée.

Rajoute la possibilité de modifier ou de supprimer des habitudes existantes.

J'aimerais que l'application puisse être soit en anglais soit en français. Permet de traduire l'application dans ces deux langues. Pour faire ça proprement, utilisons des fichiers de traduction.

Ajoutons une fonctionnalité qui va permettre de compléter les besoins journaliers de la page nutrition. Quand on appuiera sur le bouton, une fenêtre va s'ouvrir pour proposer des aliments ou des recettes qui vont compléter le besoin de calories et compléter les différents besoins de protéines, de lipides, de glucides et de fibres du jour.