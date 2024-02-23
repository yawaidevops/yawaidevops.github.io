import React, { useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { GrFormView } from 'react-icons/gr'
import { motion } from 'framer-motion';
import Header from '../header/Header';
import { useInView } from 'react-intersection-observer';
import './index.css';
import { useGlobalContext } from '../../context/context';
import Animation from '../../Animation';
import { pjt, pjt1, pjt2, pjt3 } from "../../assets";

const Projects = () => {
  const { themeColor, setPage } = useGlobalContext();
  const proArr = "projects".split("");
  const secHeader = "this is my recent projects".split("");
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (inView && entry !== undefined) {
      setPage(entry.target.id);
    }
  }, [inView, entry]);

  const variants = {
    visible: {
      scale: 1,
      opacity: 1,
    },
    hidden: {
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="w-full h-auto md:h-auto md:mb-5 dark:text-slate-500"
    >
      <div className="p-1 mb-3">
        <Header textArr={proArr} />
        <Header textArr={secHeader} size="xl" align="center" />
      </div>

      <Animation>
        <div
          id="project_cards_container"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2"
        >
          {[pjt, pjt1, pjt2, pjt3].map((pjt, idx) => (
            <motion.div
              id="project_card_container"
              variants={variants}
              className="h-80 relative duration-200 overflow-hidden"
              key={idx}
            >
              <img
                src={pjt}
                alt=""
                className="w-full h-full object-cover object-center"
              />

              <div
                id="project_card_text"
                className="absolute w-full h-full flex justify-center items-center"
              >
                <div className="w-full flex justify-around flex-col">
                  <p className="dark:text-white text-slate-400 px-3 text-sm text-justify mb-4 break-words">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <div className="flex justify-around">
                    <a
                      // href={pro.codeLink}
                      style={{
                        backgroundColor: themeColor,
                      }}
                      className="w-10 h-10 rounded-full flex justify-center items-center text-white hover:drop-shadow-lg cursor-pointer drop-shadow-lg hover:text-black"
                    >
                      <AiFillGithub className="w-8 h-8" />
                    </a>
                    <a
                      // href={pro.demoLink}
                      style={{
                        backgroundColor: themeColor,
                      }}
                      className="w-10 h-10 rounded-full flex justify-center items-center text-white hover:drop-shadow-lg cursor-pointer drop-shadow-lg hover:text-red-400"
                    >
                      <GrFormView className="w-8 h-8 rounded-full hover:bg-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full h-10 bg-red-400">
                <button>Like</button>
              </div>
            </motion.div>
          ))}
        </div>
      </Animation>
    </section>
  );
};

export default Projects