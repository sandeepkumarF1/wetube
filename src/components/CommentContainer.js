import React from 'react'

const commentData = [
    {
        name: "Sandeep Kumar",
        text: "lorem ipsum your videos is so good.",
        replies: [
            
        ]
    },
    {
        name: "Sandeep Kumar",
        text: "lorem ipsum your videos is so good.",
        replies: [
            {
                name: "Sandeep Kumar",
                text: "lorem ipsum your videos is so good.",
                replies: [
                  ]
            },
            {
                name: "Sandeep Kumar",
                text: "lorem ipsum your videos is so good.",
                replies: [
                    {
                        name: "Sandeep Kumar",
                        text: "lorem ipsum your videos is so good.",
                        replies: [
                            {
                                name: "Sandeep Kumar",
                                text: "lorem ipsum your videos is so good.",
                                replies: [
                        
                                ]
                            },
                            {
                                name: "Sandeep Kumar",
                                text: "lorem ipsum your videos is so good.",
                                replies: [
                                    {
                                        name: "Sandeep Kumar",
                                        text: "lorem ipsum your videos is so good.",
                                        replies: [
                                            {
                                                name: "Sandeep Kumar",
                                                text: "lorem ipsum your videos is so good.",
                                                replies: [
                                        
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: "Sandeep Kumar",
        text: "lorem ipsum your videos is so good.",
        replies: [

        ]
    },
    {
        name: "Sandeep Kumar",
        text: "lorem ipsum your videos is so good.",
        replies: [

        ]
    },
    {
        name: "Sandeep Kumar",
        text: "lorem ipsum your videos is so good.",
        replies: [

        ]
    },
];

const Comment = (({data}) =>{
    const {name, text, replies} = data;
    return (

    <div className='flex my-3 b p-1 rounded-md '>
        <div className='me-5'>
            <img alt='user' className='h-8' src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png' />
        </div>
        <div>
            <h1 className='font-medium'>{name}</h1>
            <h1>{text}</h1>
            {/* <h1>{replies}</h1> */}

        </div>
    </div>
    );
})

const CommentList = ({comments}) =>{
    return comments.map((comment, index) => (
        <div  key={index}>
            <Comment data={comment} />
            <div className='ps-12 border border-l-black ms-5'>
                <CommentList comments={comment.replies} />
            </div>
        </div>
    ));
};


const CommentContainer = () => {
  return (
    <div className='my-5'>
        <h1 className='font-normal text-lg'>Comments:</h1>
        <CommentList comments={commentData} />
        {/* <Comment data={commentData[0]} /> */}
    </div>
  )
}

export default CommentContainer