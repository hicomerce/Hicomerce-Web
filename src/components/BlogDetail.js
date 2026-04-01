import React from "react";
import { Link, useParams } from "react-router-dom";
import blogs from "../assets/files/blogs.json";
import { createSlug, cleanMarkdown } from "../utils/blogHelpers";

function BlogDetail() {
  const { slug } = useParams();

  const blog = blogs.find((item) => createSlug(item.titulo) === slug);

  if (!blog) {
    return (
      <section style={styles.notFoundSection}>
        <div style={styles.notFoundContainer}>
          <h1 style={styles.notFoundTitle}>Blog no encontrado</h1>
          <p style={styles.notFoundText}>
            El artículo que buscas no existe o fue removido.
          </p>
          <Link to="/blogs" style={styles.backButton}>
            Volver a blogs
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <Link to="/blogs" style={styles.backLink}>
          ← Volver a blogs
        </Link>

        {blog.url_header && (
          <img src={blog.url_header} alt={blog.titulo} style={styles.heroImage} />
        )}

        <h1 style={styles.title}>{blog.titulo}</h1>
        <p style={styles.metaDescription}>{blog.meta_descripcion}</p>

        <div style={styles.content}>
          {blog.blog_parte_1 && (
            <div style={styles.block}>
              {cleanMarkdown(blog.blog_parte_1)
                .split("\n")
                .filter((line) => line.trim() !== "")
                .map((line, index) => (
                  <p key={index} style={styles.paragraph}>
                    {line}
                  </p>
                ))}
            </div>
          )}

          {blog.blog_parte_2 && (
            <div style={styles.block}>
              {cleanMarkdown(blog.blog_parte_2)
                .split("\n")
                .filter((line) => line.trim() !== "")
                .map((line, index) => (
                  <p key={index} style={styles.paragraph}>
                    {line}
                  </p>
                ))}
            </div>
          )}
        </div>

        {blog.url_footer && (
          <img src={blog.url_footer} alt={blog.titulo} style={styles.footerImage} />
        )}
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: "#ffffff",
    padding: "50px 20px",
    minHeight: "100vh",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  backLink: {
    display: "inline-block",
    marginBottom: "24px",
    color: "#111",
    textDecoration: "none",
    fontWeight: "600",
  },
  heroImage: {
    width: "100%",
    maxHeight: "420px",
    objectFit: "cover",
    borderRadius: "18px",
    marginBottom: "30px",
  },
  title: {
    fontSize: "42px",
    lineHeight: "1.2",
    marginBottom: "16px",
    color: "#111",
  },
  metaDescription: {
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#666",
    marginBottom: "32px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  block: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  paragraph: {
    fontSize: "17px",
    lineHeight: "1.9",
    color: "#333",
    margin: 0,
  },
  footerImage: {
    width: "100%",
    borderRadius: "18px",
    marginTop: "36px",
  },
  notFoundSection: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  notFoundContainer: {
    textAlign: "center",
  },
  notFoundTitle: {
    fontSize: "34px",
    marginBottom: "12px",
  },
  notFoundText: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "20px",
  },
  backButton: {
    display: "inline-block",
    padding: "12px 20px",
    backgroundColor: "#111",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "10px",
  },
};

export default BlogDetail;