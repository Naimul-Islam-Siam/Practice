import React from "react";
import styles from "./../notes.module.css";

async function getNote(noteId: string) {
   const response = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`, {next: {revalidate: 10}});
   const data = await response.json();

   return data;
};

export default async function NotePage({ params }: any) {
   const note = await getNote(params.id);
   const { id, title, content, created } = note;

   return (
      <div>
         <h1>notes/{id}</h1>
         <div className={styles.note}>
            <h2 className={styles.title}>{title}</h2>
            <h5 className={styles.content}>{content}</h5>
            <p className={styles.created}>{created}</p>
         </div>
      </div>
   );
};