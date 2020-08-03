(function() {
    //initialize the firebase
    const firebaseConfig = {
        apiKey: "AIzaSyATOMLkNkqGwP2DudWGRMXbBRQ0b8nAi_Q",
        authDomain: "form-892f0.firebaseapp.com",
        databaseURL: "https://form-892f0.firebaseio.com",
        projectId: "form-892f0",
        storageBucket: "form-892f0.appspot.com",
        messagingSenderId: "1088370714909",
        appId: "1:1088370714909:web:852dd1e95a232b300699f4",
        measurementId: "G-DX1DNJN1V6"
      };
            firebase.initializeApp(firebaseConfig); 

            //get elements
            const txtEmail = document.getElementById('txtEmail');
            const txtPassword = document.getElementById('txtPassword');
            const txtPhone = document.getElementById('txtPhone');
            const btnLogin = document.getElementById('btnLogin');
            const btnSignUp = document.getElementById('btnSignUp');
            const btnLogout = document.getElementById('btnLogout');

            //add login event
            btnLogin.addEventListener('click', e => {
                //get email and password
                const email = txtEmail.value;
                const pass = txtPassword.value;
                const auth = firebase.auth();
                //sign in
                const promise = auth.signInWithEmailAndPassword(email,pass  );
                promise.catch(e => alert(e.message));
            });
            //add signup event
            btnSignUp.addEventListener('click', e => {
                //get email and password
                //TODO: CHECK 4 REAL EMAIl
                const email = txtEmail.value;
                const pass = txtPassword.value;
                const auth = firebase.auth();
                //sign in
                const promise = auth.createUserWithEmailAndPassword(email,pass);
                promise.catch(e => alert(e.message));
                //.then(user => console.log(user))

            } );

            btnLogout.addEventListener('click', e=> {
                firebase.auth().signOut();
            })
            //add  a realtime listener
            firebase.auth().onAuthStateChanged(firebaseUser => {
                if(firebaseUser) {
                    console.log(firebaseUser);
                    btnLogout.classList.remove('hide');
                } else {
                   
                    console.log('not logged in');

                    btnLogout.classList.add('hide');
                }
            });
}()
);