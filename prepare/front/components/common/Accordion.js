// import React, { useState } from 'react';
// import { css } from '@emotion/react';
//
// const accordionStyle = css`
//   margin-top: 30px;
// `;
//
// const accordionItemStyle = css`
//   border: 1px solid;
//   padding: 20px;
//
//   button {
//     font-size: 20px;
//     font-weight: 700;
//   }
//
//   .contents-wrap {
//     .contents {
//       padding: 10px 0;
//       background-color: #ddd;
//     }
//
//     .checkbox-wrap {
//       margin-top: 10px;
//       label {
//         margin-left: 5px;
//       }
//     }
//
//   }
//   &.opened {
//     .contents {
//       display: block;
//     }
//   }
//   &.closed {
//     .contents {
//       display: none;
//     }
//   }
// `;
//
// export const Accordion = ({ children, initOpen = false }) => {
//   const [activeIndex, setActiveIndex] = useState(initOpen ? 0 : null);
//
//   const handleToggle = (index) => {
//     setActiveIndex(prevIndex => (prevIndex === index ? null : index));
//   };
//
//   return (
//     <div css={accordionStyle} className="accordion">
//       {React.Children.map(children, (child, index) =>
//         React.cloneElement(child, {
//           isOpen: activeIndex === index,
//           onToggle: () => handleToggle(index)
//         })
//       )}
//     </div>
//   );
// };
//
// export const AccordionItem = ({ children, title, isOpen, onToggle, checkAll = false }) => {
//   return (
//     <div css={accordionItemStyle} className={`accordion-item ${isOpen ? 'opened' : 'closed'} ${checkAll && 'check-all'}`}>
//       <button type="button" className='title-btn' onClick={onToggle}>
//         {title}
//       </button>
//       <div className="contents-wrap">
//         {children}
//       </div>
//     </div>
//   );
// };