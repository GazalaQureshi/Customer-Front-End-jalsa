import React, { useState } from 'react';
import dp from '../../images/kurta-img.jpg';
import { AiFillStar ,AiFillLike} from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';

const initialComments = [
  {
    id: 1,
    name: 'Joe Henderson',
    date: 'March 25, 2023',
    text:
      'Multiline comments are used for large text descriptions of code or to comment out chunks of code while debugging applications. Comments are ignored by the compiler.',
    isLiked: false,
  },
  {
    id: 2,
    name: 'Joe Henderson',
    date: 'March 25, 2023',
    text:
      'Multiline comments are used for large text descriptions of code or to comment out chunks of code while debugging applications. Comments are ignored by the compiler.',
    isLiked: false,
  },
  {
    id: 3,
    name: 'Joe Henderson',
    date: 'March 25, 2023',
    text:
      'Multiline comments are used for large text descriptions of code or to comment out chunks of code while debugging applications. Comments are ignored by the compiler.',
    isLiked: false,
  },
];

const Comments = () => {
  const [comments, setComments] = useState(initialComments);

  const handleLikeToggle = (commentId) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId ? { ...comment, isLiked: !comment.isLiked } : comment
      )
    );
  };

  return (
    <div>
      {comments.map(({ id, name, text, date, isLiked }) => (
        <div style={{ width: '100%', maxWidth: '800px' }} key={id}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={dp} alt="dp" style={{ width: '70px', borderRadius: '50%' }} />
            <div style={{ marginLeft: '1rem' }}>
              <h2 style={{ marginTop: '0', marginBottom: '0' }}>{name}</h2>
              <p style={{ marginTop: '0.3rem', marginBottom: '.5rem' }}>{date}</p>
              <p style={{ marginTop: '0', marginBottom: '0' }}>
                <AiFillStar color="blue" fontSize="1.2rem" style={{ marginRight: '.4rem' }} />
                <AiFillStar color="blue" fontSize="1.2rem" style={{ marginRight: '.4rem' }} />
                <AiFillStar color="blue" fontSize="1.2rem" style={{ marginRight: '.4rem' }} />
                <AiFillStar color="blue" fontSize="1.2rem" style={{ marginRight: '.4rem' }} />
                <AiFillStar color="blue" fontSize="1.2rem" style={{ marginRight: '.4rem' }} />
              </p>
            </div>
          </div>
          <p className="ov-description" style={{ marginTop: '0.2rem', marginBottom: '.5rem' }}>
            {text}
          </p>
          <div>
            <p
              style={{
                color: 'grey',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                margin: '0 0 3rem 1rem',
              }}
              onClick={() => handleLikeToggle(id)}
            >
              {isLiked ? <AiFillLike /> : <BiLike />}
              <span style={{marginLeft:".4rem"}}> Like</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
