import React from "react";
import { Link } from "react-router-dom";
import blogs from "../assets/files/blogs.json";
import { createSlug, cleanMarkdown } from "../utils/blogHelpers";

function BlogsComponent() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Blog</h1>
          <p style={styles.subtitle}>
            Explora nuestros artículos y novedades
          </p>
        </div>

        <div style={styles.grid}>
          {blogs.map((blog, index) => {
            const slug = createSlug(blog.titulo);

            return (
              <article key={index} style={styles.card}>
                {blog.imagen_header && (
                  <img
                    src={blog.imagen_header}
                    alt={blog.titulo}
                    style={styles.image}
                  />
                )}

                <div style={styles.content}>
                  <h2 style={styles.cardTitle}>{blog.titulo}</h2>
                  <p style={styles.description}>{blog.meta_descripcion}</p>

                  <div style={styles.textBox}>
                    {blog.contenido && (
                      <p style={styles.text}>
                        {cleanMarkdown(
                          blog.contenido.find((item) => item.tipo === "parrafo")
                            ?.texto || ""
                        ).slice(0, 260)}
                        ...
                      </p>
                    )}
                  </div>

                  <Link to={`/blog/${slug}`} style={styles.button}>
                    Leer más
                  </Link>
                </div>

              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    backgroundColor: "#f8f8f8",
    minHeight: "100vh",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "40px",
    marginBottom: "10px",
    color: "#111",
  },
  subtitle: {
    fontSize: "18px",
    color: "#666",
    margin: 0,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "240px",
    objectFit: "cover",
    display: "block",
  },
  content: {
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  cardTitle: {
    fontSize: "24px",
    lineHeight: "1.3",
    marginBottom: "14px",
    color: "#111",
  },
  description: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "18px",
  },
  textBox: {
    flexGrow: 1,
    marginBottom: "20px",
  },
  text: {
    fontSize: "15px",
    color: "#444",
    lineHeight: "1.7",
  },
  button: {
    marginTop: "auto",
    padding: "12px 20px",
    backgroundColor: "#111",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "15px",
    fontWeight: "600",
    width: "fit-content",
  },
};

export default BlogsComponent;
