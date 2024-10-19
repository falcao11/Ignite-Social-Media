import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment () {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false} src="https://github.com/falcao11.png"
                alt=""
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gonçalo Fonseca</strong>
                            <time title="29 de Agosto à 00:00h " dateTime="2024-08-29 00:00:37">
                                Cerca há 1h atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title="Apagar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                       {content}
                    </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment  /*or () => setLikeCount(likeCount + 1)*/}>
                        <ThumbsUp size={20}/>
                        Aplaudir
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}