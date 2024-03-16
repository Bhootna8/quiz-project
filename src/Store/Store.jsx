import { useEffect, useState, createContext } from "react";
import { db, app, auth } from "../resources/firebase";
import {
  onValue,
  ref,
  set,
  remove,
  push,
  child,
  getDatabase,
} from "firebase/database";
import { Questions } from "../resources/questions";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const ContextProvider = createContext();

export const Store = ({ children }) => {
  const dbRef = ref(getDatabase());
  const [users, setUsers] = useState(onAuthStateChanged(auth, (user) => user));
  const [questions, setQuestions] = useState([]);
  const reference = ref(db, "/question");
  const questionRef = ref(db, "/question");
  console.log(child(dbRef, 'question/0/questions/0'));
  const [addingQuestion, setAddingQuestion] = useState({
    category: "General Knowledge",
    questions: {
      correctAnswer: "D",
      options: { A: "1950", B: "1948", C: "1951", D: "1949" },
      question: "When was indian constituition made?",
    },
  });

  // function addQuestion() {
  //   set(questionRef, addQuestion).then(res=> {
  //     console.log(res)
  //   }).catch(err=> {
  //     console.log(err)
  //   })
  // }

  // addQuestion()

  const deleteQuestion = async (data) => {
    remove(questionRef)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   set(reference, Questions)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(()=> {
  //   push(reference, Questions).then(res=> {
  //     console.log(res)
  //   }).catch(err=> {
  //     console.log(err)
  //   })
  // }, [])

  useEffect(() => {
    onValue(reference, (snapShot) => {
      if (snapShot.exists()) {
        console.log(snapShot.val());
        console.log(snapShot.key);
        setQuestions(snapShot.val());
      }
    });
  }, []);

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUsers(userCredential);
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUsers(userCredential);
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContextProvider.Provider
      value={{
        users,
        setUsers,
        signIn,
        signUp,
        questions,
        setQuestions,
        deleteQuestion,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};
