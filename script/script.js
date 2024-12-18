function verifier() {
    var score = 0; // Initialisation du score
    var correctAnswers = ["6", "20", "42", "72", "24", "25", "81", "56", "27", "100"]; // Réponses correctes
    var feedback = ""; // Feedback des réponses incorrectes ou manquantes

    // Parcours des 10 questions
    for (var i = 0; i < 10; i++) {
        var question = document.getElementsByName("q" + (i + 1)); // Récupère les boutons radio pour chaque question
        var answered = false; // Vérifie si une réponse est cochée

        // Parcours des options pour trouver la réponse cochée
        for (var j = 0; j < question.length; j++) {
            if (question[j].checked) {
                answered = true;
                if (question[j].value === correctAnswers[i]) {
                    score++; // Réponse correcte
                } else {
                    feedback += "Question " + (i + 1) + ": Mauvaise réponse. La bonne réponse est " + correctAnswers[i] + ".\n";
                }
                break;
            }
        }

        if (!answered) {
            feedback += "Question " + (i + 1) + ": Vous n'avez pas répondu.\n";
        }
    }

    // Affichage du résultat dans une boîte de dialogue
    alert("Votre score est : " + score + "/10\n\n" + feedback);
}
