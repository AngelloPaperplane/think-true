import AboutTemplate from '@/components/templates/AboutTemplate';

const DynamicPage = ({ data }) => {
  // Aquí podrías tener un switch si luego creas más plantillas
  // Por ahora, todas las páginas dinámicas usarán el diseño de "About"
  return <AboutTemplate data={data} />;
};

export async function getServerSideProps({ params }) {
  // params.slug es un array, ej: ["mi-nueva-pagina"]
  const slug = params.slug.join('/');

  const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}${slug}`);
  const data = await res.json();

  // Si la página no existe en WP, mandamos 404
  if (!data || data.error) {
    return { notFound: true };
  }

  return { props: { data } };
}

export default DynamicPage;