import stl from './section.module.css';
const Section = ({ children, title }) => {
  return (
    <section>
      <h2 className={stl.title}>{title}</h2>
      {children}
    </section>
  );
};
export default Section;
