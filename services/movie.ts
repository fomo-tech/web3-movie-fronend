import { Filter } from "@/types/movie";
import queryString from "query-string";

export const getMetadata = async <T>(filter?: Partial<Filter>): Promise<T> => {
  const query = queryString.stringify(filter || {}, {
    skipEmptyString: true,
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_MOVIE}/tim-kiem?${query}`
  );
  const data = await response.json();
  return data.data as T;
};

export const getHome = async <T>(filter?: Partial<Filter>): Promise<T> => {
  const query = queryString.stringify(filter || {}, {
    skipEmptyString: true,
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_MOVIE}/home?${query}`
  );
  const data = await response.json();
  return data.data as T;
};

export const getMovies = async <T>(
  slug: string,
  filter?: Partial<Filter>
): Promise<T> => {
  const query = queryString.stringify(filter || {}, {
    skipEmptyString: true,
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_MOVIE}/danh-sach/${slug}?${query}`
  );
  const data = await response.json();

  return data.data as T;
};

export const getMoviesByCategory = async <T>(
  category: string,
  filter?: Partial<Filter>
): Promise<T> => {
  const query = queryString.stringify(filter || {}, {
    skipEmptyString: true,
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_MOVIE}/the-loai/${category}?${query}`
  );
  const data = await response.json();
  return data.data as T;
};

export const getMoviesByCountry = async <T>(
  country: string,
  filter?: Partial<Filter>
): Promise<T> => {
  const query = queryString.stringify(filter || {}, {
    skipEmptyString: true,
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_MOVIE}/quoc-gia/${country}?${query}`
  );
  const data = await response.json();
  return data.data as T;
};

export const searchMovies = async <T>(
  filter?: Partial<Filter & { keyword: string }>
): Promise<T> => {
  const query = queryString.stringify(filter || {}, {
    skipEmptyString: true,
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_MOVIE}/tim-kiem?${query}`
  );
  const data = await response.json();
  return data.data as T;
};

export const getMovie = async <T>(slug: string): Promise<T | null> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_MOVIE}/phim/${slug}`
    );
    const data = await response.json();

    return data.data as T;
  } catch (_error) {
    return null;
  }
};

export const getActors = async <T>(movieSlug: string): Promise<T> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_MOVIE}/phim/${movieSlug}/peoples`
  );
  const data = await response.json();
  return data.data as T;
};

export const getCategories = async <T>(): Promise<T> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_MOVIE}/the-loai`);
  const data = await response.json();
  return data.data as T;
};

export const getNationals = async <T>(): Promise<T> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_MOVIE}/quoc-gia`);
  const data = await response.json();
  return data.data as T;
};
