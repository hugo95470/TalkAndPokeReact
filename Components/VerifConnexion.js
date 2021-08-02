import SQLite from 'react-native-sqlite-storage';


const db = SQLite.openDatabase({
    name: 'TalkAndPokeDB',
    location: 'default',
    },
    () => { },
    error => { console.log(error)}
);

export default function VerifConnexion() {

    useEffect(() => {

        creatTable();
        
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO Utilisateur(Mail, MotDePasse) VALUES(?, ?);',
                ['cabaret.hugo@orange.fr', 'test']
            )
        })

        db.transaction(async (tx) => {
            tx.executeSql(
                'SELECT * FROM Utilisateur',
                [],
                (tx, results) => {
                    var len = results.rows.length;
                    if(len > 0) {
                        var mail = result.rows.item(0).Mail
                        var motDePasse = result.rows.item(0).MotDePasse

                        alert(mail + " " + motDePasse);
                    }
                }
            )
        })
        
    }, []);

    const creatTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS Utilisateur(Mail TEXT, MotDePasse TEXT);"
            )
        })
    }
}
