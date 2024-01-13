interface NewsContentProps {
  params: {
    content: string[];
  };
}

export default function NewsContent(props: NewsContentProps) {
  return <h1>News content page - {props.params.content}</h1>;
}
